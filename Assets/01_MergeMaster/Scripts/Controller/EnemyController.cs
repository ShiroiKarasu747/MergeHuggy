using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class EnemyController : MonoBehaviour
{
    public Animator animator;
    public float yDie;
    public float zDie;
    private MaterialPropertyBlock _propBlock;
    public Renderer meshRenderer;
    //public GameObject canvas;
    public GameObject shadow;
    private Color color;
    protected bool isAlive = true;
    [SerializeField] private int hp;
    [SerializeField] private int currentHP;
    //Chasing Variable
    protected GameObject playerTarget;
    private bool isTargetEnemy;
    private float speedMove = 0.9f;
    [SerializeField] private float maxDist = 1;
    [SerializeField] private float minDist = 1;


    public void AnimationMove(bool temp)
    {
        animator.SetBool(DefineHelper.Moving, temp);
    }
    public void AnimationAttack(bool temp)
    {
        animator.SetBool(DefineHelper.Attack, temp);
    }
    public void RunToTarget()
    {
        AnimationMove(true);
        transform.DOMove(new Vector3(transform.position.x, transform.position.y, 0.59f), 1.5f).SetEase(Ease.Linear).OnComplete(() =>
        {
            AnimationMove(false);
            AnimationAttack(true);
        });
    }
    bool flagAnim1, flagAnim2;
    public void ChasingPlayer()
    {
        isTargetEnemy = true;
        playerTarget = GlobalInstance.Instance.gameManagerInstance.lstCharacter[Random.Range(0, GlobalInstance.Instance.gameManagerInstance.lstCharacter.Count)].gameObject;
    }
    private void Update()
    {
        if (isTargetEnemy && isAlive)
        {
            while (!playerTarget.activeSelf)
            {
                ChasingPlayer();
            }
            transform.LookAt(playerTarget.transform);
            if (Vector3.Distance(transform.position, playerTarget.transform.position) >= minDist) //Mindist
            {
                if (!flagAnim1)
                {
                    flagAnim1 = true;
                    flagAnim2 = false;
                    AnimationMove(true);
                }
                transform.position += transform.forward * speedMove * Time.deltaTime;
            }
            if (Vector3.Distance(transform.position, playerTarget.transform.position) <= maxDist) //MaxDist
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
    public void AnimationDie()
    {
        animator.SetTrigger(DefineHelper.Dead);
    }
    public void Dying()
    {
        //Debug.Log("Dead");
        //canvas.SetActive(false);
        shadow.SetActive(false);
        AnimationDie();
        //transform.DOMove(new Vector3(transform.position.x, yDie, transform.position.z - zDie), 0.6f).SetDelay(0.4f);
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
        if (other.gameObject.CompareTag(NameTag.AttackPlayer))
        {
            ApplyDamage();
        }
    }
}
