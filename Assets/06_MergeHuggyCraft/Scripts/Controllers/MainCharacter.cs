using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class MainCharacter : MonoBehaviour
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
    protected bool isAlive = true;
    //private int hp;
    //private int currentHP;


    [Header("UI")]
    //public Text txtBorderIndex;
    //public Text txtIndex;
    [HideInInspector] public bool isChoosed;
    //Renderer
    protected MaterialPropertyBlock _propBlock;
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
        MainCharacter newCharacterController = newChar.GetComponent<MainCharacter>();
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
        isAlive = false;
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
    public virtual void ApplyDamage()
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
        if (other.gameObject.CompareTag(NameTag.AttackEnemy))
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
