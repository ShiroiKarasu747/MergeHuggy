using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
public class GameManager2 : Singleton<GameManager2>
{
    [HideInInspector] public bool isCanDraw;
    [HideInInspector] public bool isEndGame;
    [HideInInspector] public bool isReallyEnd;
    [SerializeField] private Camera cameraMain;
    public SoundController soundController;
    public Transform[] arrPosFighting;
    [SerializeField] private GameObject characterParent;
    [SerializeField] private GameObject enemyParent;
    [HideInInspector] public List<CharacterController> lstCharacter = new List<CharacterController>();
    [HideInInspector] public List<EnemyController> lstEnemy = new List<EnemyController>();
    [HideInInspector] public bool isMergeWin;
    [HideInInspector] public int totalPlayer;
    public GameObject enemyMerge;
    public GameObject endCard;
    [Header("UIConfig")]
    public Image victory;
    public Image lose;
    public GameObject guide;
    public GameObject guideEnd;
    private void OnEnable()
    {
        EventDispatcher.Instance.RegisterListener(EventID.StartAttack, (param) => { ActionAttack(); });
        EventDispatcher.Instance.RegisterListener(EventID.CheckMerge, (param) => { SetMergeLose(); });
    }
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        isCanDraw = true;
        for (int i = 0; i < characterParent.transform.childCount; i++)
        {
            lstCharacter.Add(characterParent.transform.GetChild(i).GetComponent<CharacterController>());
        }
        for (int i = 0; i < enemyParent.transform.childCount; i++)
        {
            lstEnemy.Add(enemyParent.transform.GetChild(i).GetComponent<EnemyController>());
        }
        totalPlayer = characterParent.transform.childCount;
        isMergeWin = true;
    }

    public void ActionAllCharacter()
    {
        for (int i = 0; i < lstCharacter.Count; i++)
        {
            lstCharacter[i].ChasingEnemy();
        }
    }
    public void ActionAllEnemy()
    {
        for (int i = 0; i < lstEnemy.Count; i++)
        {
            lstEnemy[i].ChasingPlayer();
        }
    }
    void SetMergeLose()
    {
        isMergeWin = false;
    }
    public void ActionAttack()
    {
        ActionAllCharacter();
        ActionAllEnemy();
        StartCoroutine(HelperUtility.StartAction(() =>
        {
            soundController.PlaySoundPunch();
            soundController.PlaySoundTRex();
        }, 2.1f));
        if (isMergeWin)
        {
            StartCoroutine(HelperUtility.StartAction(() =>
            {
                for (int i = 0; i < lstEnemy.Count; i++)
                {
                    lstEnemy[i].ApplyDamage();
                }
            }, 2.4f));
            StartCoroutine(IEAfterAttackWin(2.8f));
        }
        else
        {
            StartCoroutine(HelperUtility.StartAction(() =>
            {
                for (int i = 0; i < lstCharacter.Count; i++)
                {
                    lstCharacter[i].ApplyDamage();
                }
            }, 2.4f));
            StartCoroutine(IEAfterAttackFalse(2.8f));
        }
    }
    IEnumerator IEAfterAttackFalse(float time)
    {
        yield return new WaitForSeconds(time);
        for (int i = 0; i < lstEnemy.Count; i++)
        {
            lstEnemy[i].AnimationAttack(false);
        }
        for (int i = 0; i < lstCharacter.Count; i++)
        {
            lstCharacter[i].Dying();
        }
        lose.transform.DOScale(1, 0.8f).SetEase(Ease.OutBack);
        soundController.PlaySoundLose();
        StartCoroutine(IEEndCard((2f)));
    }
    IEnumerator IEAfterAttackWin(float time)
    {
        yield return new WaitForSeconds(time);
        for (int i = 0; i < lstCharacter.Count; i++)
        {
            lstCharacter[i].AnimationAttack(false);
        }
        for (int i = 0; i < lstEnemy.Count; i++)
        {
            lstEnemy[i].Dying();
        }
        victory.transform.DOScale(1, 0.8f).SetEase(Ease.OutBack);
        soundController.PlaySoundWin();
        StartCoroutine(IEEndCard((2f)));
    }
    IEnumerator IEEndCard(float time)
    {
        yield return new WaitForSeconds(time);
        characterParent.SetActive(false);
        enemyParent.SetActive(false);
        enemyMerge.SetActive(false);
        lose.gameObject.SetActive(false);
        victory.gameObject.SetActive(false);
        guideEnd.gameObject.SetActive(true);
        LogEndGame();
        isReallyEnd = true;
        endCard.SetActive(true);
    }
    public void LogEndGame()
    {
        Luna.Unity.LifeCycle.GameEnded();
    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
