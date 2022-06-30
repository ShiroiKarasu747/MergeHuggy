using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager3 : Singleton<GameManager3>
{
    [HideInInspector] public bool isCanDraw;
    [HideInInspector] public bool isEndGame;
    [HideInInspector] public bool isReallyEnd;
    [SerializeField] private Camera cameraMain;
    public SoundController soundController;
    [Header("UIConfig")]
    public GameObject guide;
    public GameObject guideEnd;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        isCanDraw = true;
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
