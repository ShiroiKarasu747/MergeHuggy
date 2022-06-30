using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
public class CharacterHuggy : MonoBehaviour
{
    [SerializeField] private Animator animator;
    //[SerializeField] private GameObject canvas;
    //[SerializeField] private float yDie;
    //public GameObject border;
    public GameObject circle;
    public GameObject characterUp;
    public GameObject fxSmoke;
    public Vector3 charScale;
    public int index;
    private bool isAlive = true;

    private int hp;
    private int currentHP;


    [Header("UI")]
    //public Text txtBorderIndex;
    //public Text txtIndex;
    [HideInInspector] public bool isChoosed;
    //Renderer
    private MaterialPropertyBlock _propBlock;
    public Renderer meshRenderer;

    //Chasing Variable
    private GameObject enemyTarget;
    [HideInInspector] public bool isTargetEnemy;
    private float speedMove = 0.9f;
    private float maxDist = 1;
    private float minDist = 1;
    public void ActiveChoose()
    {
        //border.gameObject.SetActive(true);
        circle.gameObject.SetActive(true);
    }
    public void UnActiveChoose()
    {
        //border.gameObject.SetActive(false);
        circle.gameObject.SetActive(false);
    }
    public void SpawnCharacter(int index)
    {
        var newChar = Instantiate(characterUp);
        newChar.transform.position = transform.position;
        newChar.transform.localScale = Vector3.zero;
        CharacterHuggy newCharacterController = newChar.GetComponent<CharacterHuggy>();
        newChar.transform.DOScale(newCharacterController.charScale, 0.4f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            GlobalInstance.Instance.gameManagerInstance.guideAttack.SetActive(true);
            //if (GlobalInstance.Instance.gameManagerInstance.countEnd == 2)
            //{
            //    EventDispatcher.Instance.PostEvent(EventID.EndGame);
            //}
        });
        //newCharacterController.txtBorderIndex.text = index.ToString();
        //newCharacterController.txtIndex.text = index.ToString();
        GlobalInstance.Instance.gameManagerInstance.soundController.PlaySoundMerge();
        //For GamePlayFight
        GlobalInstance.Instance.gameManagerInstance.lstCharacter.Add(newCharacterController);
        GlobalInstance.Instance.gameManagerInstance.enemyMerge = newChar;
        SpawnerFXSmoke(newChar);
    }
    void SpawnerFXSmoke(GameObject parentt)
    {
        var fx = Instantiate(fxSmoke, parentt.transform);
        fx.transform.localPosition = new Vector3(0, 0.37f, 0);
    }
    public void RunToTarget()
    {
        //For GamePlayFight
        //canvas.SetActive(false);
        int random = Random.Range(0, 8);
        bool isFullSlot = true;
        Transform[] array = GlobalInstance.Instance.gameManagerInstance.arrPosFighting;
        for (int i = 0; i < array.Length; i++)
        {
            if (!array[i].GetComponent<ArrayPosFight>().isHasPlayer)
            {
                isFullSlot = false;
                break;
            }
        }
        if (!isFullSlot)
        {
            while (array[random].GetComponent<ArrayPosFight>().isHasPlayer)
            {
                random = Random.Range(0, 8);
            }
            array[random].GetComponent<ArrayPosFight>().isHasPlayer = true;
            Vector3 posMove = array[random].position;
            AnimationMove(true);
            transform.DOMove(posMove, 1.5f).SetEase(Ease.Linear).OnComplete(() =>
            {
                AnimationMove(false);
                animator.SetTrigger(DefineHelper.Attack);
            });
            //var direction = new Vector3(posMove.x - transform.position.x, posMove.y - transform.position.y, posMove.z - transform.position.z);
            //RotateFacing(direction);
        }
        else
        {
            float randomPosX = Random.Range(-1.07f, 1.07f);
            Vector3 posMove = new Vector3(randomPosX, 0.079f, 0.285f);
            AnimationMove(true);
            transform.DOMove(posMove, 1.5f).SetEase(Ease.Linear).OnComplete(() =>
            {
                AnimationMove(false);
                AnimationAttack(true);

            });
            //var direction = new Vector3(posMove.x - transform.position.x, posMove.y - transform.position.y, posMove.z - transform.position.z);
            //RotateFacing(direction);
        }
    }

    bool flagAnim1, flagAnim2;
    public void ChasingEnemy()
    {
        isTargetEnemy = true;
        enemyTarget = GlobalInstance.Instance.gameManagerInstance.lstEnemy[Random.Range(0, GlobalInstance.Instance.gameManagerInstance.lstEnemy.Count)].gameObject;
    }
    private void Update()
    {
        if (isTargetEnemy && isAlive)
        {
            //Debug.Log("a");
            transform.LookAt(enemyTarget.transform);
            if (Vector3.Distance(transform.position, enemyTarget.transform.position) >= minDist) //Mindist
            {
                if (!flagAnim1)
                {
                    flagAnim1 = true;
                    flagAnim2 = false;
                    AnimationMove(true);
                }
                transform.position += transform.forward * speedMove * Time.deltaTime;
            }
            if (Vector3.Distance(transform.position, enemyTarget.transform.position) <= maxDist) //MaxDist
            {
                if (!flagAnim2)
                {
                    flagAnim2 = true;
                    flagAnim1 = false;
                    AnimationMove(false);
                    AnimationAttack(true);
                }
                //Here Call any function U want Like Shoot at here or something
            }
        }
    }

    public void AnimationMove(bool temp)
    {
        animator.SetBool(DefineHelper.Moving, temp);
    }
    public void AnimationDie()
    {
        animator.SetTrigger(DefineHelper.Dead);
    }
    public void AnimationAttack(bool temp)
    {
        animator.SetBool(DefineHelper.Attack, temp);
    }
    public void Dying()
    {
        //isAlive = false;
        //AnimationDie();
        //float random = Random.Range(0.2f, 0.45f);
        //transform.DOMove(new Vector3(transform.position.x, yDie, transform.position.z - random), 0.6f).SetDelay(0.4f);
    }
    void RotateFacing(Vector3 directionFacing)
    {
        if (directionFacing == Vector3.zero)
            return;
        var targetRotation = Quaternion.LookRotation(directionFacing);
        transform.rotation = Quaternion.RotateTowards(transform.rotation, targetRotation, 10 * Time.deltaTime);
    }
    public void ApplyDamage()
    {
        _propBlock = new MaterialPropertyBlock();
        meshRenderer.GetPropertyBlock(_propBlock);
        _propBlock.SetColor("_Color", Color.red);
        //ChangeColor();
        meshRenderer.SetPropertyBlock(_propBlock);
        StartCoroutine(HelperUtility.StartAction(() =>
        {
            _propBlock.SetColor("_Color", new Color32(217, 217, 217, 255));
            meshRenderer.SetPropertyBlock(_propBlock);
        }, 0.3f));
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("AttackEnemy"))
        {
            ApplyDamage();
        }
    }

    //private Color color;
    //private void ChangeColor() // hàm này sẽ thay đổi màu từ bình thường sang đỏ
    //{
    //    DOTween.To(() => color, x => color = x, Color.red, 0.5f).OnComplete(OnChangeComplete); // khi thay đổi sang đỏ xong thì Oncomplete sẽ gọi lại hàm đổi từ đỏ về trắng
    //}
    //private void OnChangeComplete()
    //{
    //    DOTween.To(() => color, x => color = x, Color.white, 0.5f);
    //}
}
