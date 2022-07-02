using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
public class MergeHuggyCraft1 : Singleton<MergeHuggyCraft1>
{
    public DrawLine drawLine;
    [HideInInspector] public bool isCanDraw;
    [HideInInspector] public bool isEndGame;
    public Camera cameraMain;
    public SoundController soundController;
    //public Transform[] arrPosFighting;
    public GameObject characterParent;
    public GameObject enemyParent;
    [HideInInspector] public List<MainCharacter> lstCharacter = new List<MainCharacter>();
    [HideInInspector] public List<EnemyController> lstEnemy = new List<EnemyController>();
    [HideInInspector] public bool isMergeWin;
    [HideInInspector] public int totalPlayer;
    [HideInInspector] public GameObject enemyMerge;
    public GameObject characterParent2;
    public GameObject enemyParent2;
    public GameObject map1;
    public GameObject map2;
    public GameObject bridge1;
    public GameObject bridge2;

    [HideInInspector] public int countEnd;
    [Header("UIConfig")]
    public Image victory;
    public Image lose;
    public GameObject guide;
    public GameObject guideHand;
    public GameObject guideAttack;
    public GameObject gameEndUI;
    public Button fightBtn;
    private void OnEnable()
    {
        //EventDispatcher.Instance.RegisterListener(EventID.CheckMerge, (param) => { SetMergeLose(); });
        //EventDispatcher.Instance.RegisterListener(EventID.EndGame, (param) => { EndCard(); });
        Luna.Unity.LifeCycle.OnMute += MuteGameFunction;
        Luna.Unity.LifeCycle.OnUnmute += UnMuteGameFunction;
    }
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        fightBtn.onClick.AddListener(ActionAttack);
        isCanDraw = true;
        for (int i = 0; i < characterParent.transform.childCount; i++)
        {
            lstCharacter.Add(characterParent.transform.GetChild(i).GetComponent<MainCharacter>());
        }
        for (int i = 0; i < enemyParent.transform.childCount; i++)
        {
            lstEnemy.Add(enemyParent.transform.GetChild(i).GetComponent<EnemyController>());
        }
        totalPlayer = characterParent.transform.childCount;
        isMergeWin = true;
        countEnd = 0;
    }
    void MuteGameFunction()
    {
        soundController.audioSourceBG.volume = 0;
        soundController.audioSourceFX.volume = 0;
    }
    void UnMuteGameFunction()
    {
        soundController.audioSourceBG.volume = 1;
        soundController.audioSourceFX.volume = 1;
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
        Luna.Unity.Analytics.LogEvent("Attack Phase1 ", 0);
        guideAttack.SetActive(false);
        ActionAllCharacter();
        ActionAllEnemy();
        StartCoroutine(IEAfterAttackWin(3f));
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
        if (countEnd == 0)
        {
            StartCoroutine(IENextWave2((2.4f)));
        }
    }


    IEnumerator IENextWave2(float time)
    {
        yield return new WaitForSeconds(time);
        for (int i = 0; i < lstCharacter.Count; i++)
        {
            lstCharacter[i].gameObject.SetActive(false);
        }
        for (int i = 0; i < lstEnemy.Count; i++)
        {
            lstEnemy[i].gameObject.SetActive(false);
        }
        lose.gameObject.SetActive(false);
        victory.gameObject.SetActive(false);
        lstCharacter.Clear();
        lstEnemy.Clear();
        for (int i = 0; i < characterParent2.transform.childCount; i++)
        {
            lstCharacter.Add(characterParent2.transform.GetChild(i).GetComponent<MainCharacter>());
        }
        for (int i = 0; i < enemyParent2.transform.childCount; i++)
        {
            lstEnemy.Add(enemyParent2.transform.GetChild(i).GetComponent<EnemyController>());
        }
        characterParent2.SetActive(true);
        enemyParent2.SetActive(true);
        map1.SetActive(false);
        map2.SetActive(true);
        bridge1.transform.DOScaleZ(0.3f, 1.2f);
        bridge2.transform.DOScaleZ(0.3f, 1.2f);
        gameEndUI.SetActive(true);
        isCanDraw = false;
        ToTheEndGame();
        //countEnd++;
    }
    //void EndCard()
    //{
    //    fightBtn.onClick.RemoveListener(ActionAttack);
    //    fightBtn.enabled = false;
    //    guideAttack.SetActive(true);
    //    ToTheEndGame();
    //}
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
