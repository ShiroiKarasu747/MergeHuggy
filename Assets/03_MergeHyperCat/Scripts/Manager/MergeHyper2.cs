using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
public class MergeHyper2 : Singleton<MergeHyper2>
{
    public DrawLine drawLine;
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
    public GameObject endGameModel;
    //public GameObject characterParent3;
    //public GameObject enemyParent3;
    [HideInInspector] public int countEnd;
    [Header("UIConfig")]
    public Image victory;
    public Image lose;
    public GameObject guide;
    public GameObject guideHand;
    public GameObject guideHand2;
    public GameObject guideAttack;
    public GameObject guideChooseEnd;
    public Button fightBtn;
    private void OnEnable()
    {
        //EventDispatcher.Instance.RegisterListener(EventID.CheckMerge, (param) => { SetMergeLose(); });
        //EventDispatcher.Instance.RegisterListener(EventID.EndGame, (param) => { EndCard(); });
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
    }
    public void ActionAttack()
    {
        Luna.Unity.Analytics.LogEvent("Attack Phase1 ", 0);
        guideAttack.SetActive(false);
        isCanDraw = false;
        ActionAllCharacter();
        ActionAllEnemy();
        StartCoroutine(HelperUtility.StartAction(() =>
        {
            for (int i = 0; i < lstEnemy.Count; i++)
            {
                lstEnemy[i].ApplyDamage();
            }
        }, 2.2f));
        StartCoroutine(HelperUtility.StartAction(() =>
        {
            for (int i = 0; i < lstEnemy.Count; i++)
            {
                lstEnemy[i].ApplyDamage();
            }
        }, 3f));
        StartCoroutine(HelperUtility.StartAction(() =>
        {
            for (int i = 0; i < lstEnemy.Count; i++)
            {
                lstEnemy[i].ApplyDamage();
            }
        }, 3.2f));
        StartCoroutine(IEAfterAttackWin(3.4f));
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
            //StartCoroutine(IENextWave2((2.7f)));
            StartCoroutine(IENextWaveEnd((2f)));

        }
    }
    IEnumerator IENextWaveEnd(float time)
    {
        yield return new WaitForSeconds(time);
        victory.gameObject.SetActive(false);
        for (int i = 0; i < lstCharacter.Count; i++)
        {
            lstCharacter[i].gameObject.SetActive(false);
        }
        for (int i = 0; i < lstEnemy.Count; i++)
        {
            lstEnemy[i].gameObject.SetActive(false);
        }
        ToTheEndGame();
        endGameModel.SetActive(true);
        guideChooseEnd.SetActive(true);
    }
    //IEnumerator IENextWave2(float time)
    //{
    //    yield return new WaitForSeconds(time);
    //    for (int i = 0; i < lstCharacter.Count; i++)
    //    {
    //        lstCharacter[i].gameObject.SetActive(false);
    //    }
    //    for (int i = 0; i < lstEnemy.Count; i++)
    //    {
    //        lstEnemy[i].gameObject.SetActive(false);
    //    }
    //    lose.gameObject.SetActive(false);
    //    victory.gameObject.SetActive(false);
    //    guideHand2.SetActive(true);
    //    guide.SetActive(true);
    //    lstCharacter.Clear();
    //    lstEnemy.Clear();
    //    for (int i = 0; i < characterParent2.transform.childCount; i++)
    //    {
    //        lstCharacter.Add(characterParent2.transform.GetChild(i).GetComponent<CharacterController>());
    //    }
    //    for (int i = 0; i < enemyParent2.transform.childCount; i++)
    //    {
    //        lstEnemy.Add(enemyParent2.transform.GetChild(i).GetComponent<EnemyController>());
    //    }
    //    characterParent2.SetActive(true);
    //    enemyParent2.SetActive(true);
    //    isCanDraw = false;
    //    ToTheEndGame();
    //    //countEnd++;
    //}
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
