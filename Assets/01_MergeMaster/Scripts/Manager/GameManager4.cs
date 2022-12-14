using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
public class GameManager4 : Singleton<GameManager4>
{
    [HideInInspector] public bool isCanDraw;
    [HideInInspector] public bool isEndGame;
    public Camera cameraMain;
    public SoundController soundController;
    public Transform[] arrPosFighting;
    public GameObject characterParent;
    public GameObject enemyParent;
    [HideInInspector] public List<CharacterController> lstCharacter = new List<CharacterController>();
    [HideInInspector] public List<EnemyController> lstEnemy = new List<EnemyController>();
    [HideInInspector] public bool isMergeWin;
    [HideInInspector] public int totalPlayer;
    [HideInInspector] public GameObject enemyMerge;
    public GameObject waveEnd;
    [HideInInspector] public int countEnd;
    [Header("UIConfig")]
    public Image victory;
    public Image lose;
    public GameObject guide;
    public GameObject guideHand;
    public GameObject guideHand2;
    public GameObject guideAttack;
    public Button fightBtn;
    private void OnEnable()
    {
        //EventDispatcher.Instance.RegisterListener(EventID.CheckMerge, (param) => { SetMergeLose(); });
        EventDispatcher.Instance.RegisterListener(EventID.EndGame, (param) => { EndCard(); });
    }
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        fightBtn.onClick.AddListener(ActionAttack);
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
        countEnd = 0;
    }
    private void ActionAllCharacter()
    {
        for (int i = 0; i < lstCharacter.Count; i++)
        {
            lstCharacter[i].ChasingEnemy();
        }
    }
    private void ActionAllEnemy()
    {
        for (int i = 0; i < lstEnemy.Count; i++)
        {
            lstEnemy[i].ChasingPlayer();
        }
    }
    //void SetMergeLose()
    //{
    //    isMergeWin = false;
    //}
    public void UnActiveGuide()
    {
        GlobalInstance.Instance.gameManagerInstance.guide.SetActive(false);
        GlobalInstance.Instance.gameManagerInstance.guideHand.SetActive(false);
        //GlobalInstance.Instance.gameManagerInstance.guideHand2.SetActive(false);
    }
    public void ActionAttack()
    {
        //Luna.Unity.Analytics.LogEvent("Attack Phase1 ", 0);
        guideAttack.SetActive(false);
        ActionAllCharacter();
        ActionAllEnemy();
        //if (isMergeWin)
        //{
        StartCoroutine(HelperUtility.StartAction(() =>
        {
            for (int i = 0; i < lstEnemy.Count; i++)
            {
                lstEnemy[i].ApplyDamage();
            }
        }, 2.2f));
        //StartCoroutine(HelperUtility.StartAction(() =>
        //{
        //    for (int i = 0; i < lstCharacter.Count; i++)
        //    {
        //        lstCharacter[i].ApplyDamage();
        //    }
        //}, 2.4f));
        StartCoroutine(HelperUtility.StartAction(() =>
        {
            for (int i = 0; i < lstEnemy.Count; i++)
            {
                lstEnemy[i].ApplyDamage();
            }
        }, 3f));
        //StartCoroutine(HelperUtility.StartAction(() =>
        //{
        //    for (int i = 0; i < lstCharacter.Count; i++)
        //    {
        //        lstCharacter[i].ApplyDamage();
        //    }
        //}, 3.2f));
        StartCoroutine(HelperUtility.StartAction(() =>
        {
            for (int i = 0; i < lstEnemy.Count; i++)
            {
                lstEnemy[i].ApplyDamage();
            }
        }, 3.2f));
        //StartCoroutine(HelperUtility.StartAction(() =>
        //{
        //    for (int i = 0; i < lstCharacter.Count; i++)
        //    {
        //        lstCharacter[i].ApplyDamage();
        //    }
        //}, 4f));
        StartCoroutine(IEAfterAttackWin(3.4f));
        //}
    }
    IEnumerator IEAfterAttackWin(float time)
    {
        yield return new WaitForSeconds(time);
        for (int i = 0; i < lstCharacter.Count; i++)
        {
            lstCharacter[i].AnimationAttack(false);
            lstCharacter[i].isTargetEnemy = false;
        }
        for (int i = 0; i < lstEnemy.Count; i++)
        {
            lstEnemy[i].Dying();
        }
        victory.transform.DOScale(1, 0.8f).SetEase(Ease.OutBack);
        soundController.PlaySoundWin();
        StartCoroutine(IENextWave2((2.7f)));
    }
    IEnumerator IENextWave2(float time)
    {
        yield return new WaitForSeconds(time);
        for (int i = 0; i < lstCharacter.Count; i++)
        {
            lstCharacter[i].gameObject.SetActive(false);
        }
        enemyParent.SetActive(false);
        lose.gameObject.SetActive(false);
        victory.gameObject.SetActive(false);
        guideHand2.SetActive(true);
        guide.SetActive(true);
        waveEnd.SetActive(true);
        isCanDraw = true;
        countEnd++;

    }
    void EndCard()
    {
        fightBtn.onClick.RemoveListener(ActionAttack);
        fightBtn.enabled = false;
        guideAttack.SetActive(true);
        ToTheEndGame();
    }
    public void ToTheEndGame()
    {
        GlobalInstance.Instance.gameManagerInstance.isEndGame = true;
        Luna.Unity.LifeCycle.GameEnded();
    }
    public void InstallFullGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
