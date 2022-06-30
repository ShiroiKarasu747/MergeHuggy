using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager1 : Singleton<GameManager1>
{
    [HideInInspector] public bool isCanDraw;
    [HideInInspector] public bool isEndGame;
    [SerializeField] private Camera cameraMain;

    public SoundController soundController;
    public Transform[] arrPosFighting;
    [Header("UIConfig")]
    public GameObject guide;
    public GameObject guideEnd;
    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted();
        isCanDraw = true;
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
