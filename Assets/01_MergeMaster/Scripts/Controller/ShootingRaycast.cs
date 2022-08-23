using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShootingRaycast : MonoBehaviour
{

    Ray ray;
    private List<MainCharacter> lstObjects = new List<MainCharacter>();
    private bool flagMergeDone = false;
    private void Update()
    {

        if (!GlobalInstance.Instance.gameManagerInstance.isEndGame)
        {
            if (GlobalInstance.Instance.gameManagerInstance.isCanDraw)
            {
                if (Input.GetMouseButtonDown(0))
                {
                    ResetAll();
                }
                if (Input.GetMouseButton(0))
                {
                    RaycastHit hit;
                    ray = Camera.main.ScreenPointToRay(Input.mousePosition);
                    if (Physics.Raycast(ray, out hit, Mathf.Infinity, 1 << 9))
                    {
                        Transform select = hit.transform;
                        //if (select.gameObject.name == "4.pan") Debug.Log("Hit pan");
                        if (select.transform.CompareTag(NameTag.Player))
                        {
                            MainCharacter charController = select.GetComponent<MainCharacter>();
                            if (!charController.isChoosed)
                            {
                                GlobalInstance.Instance.gameManagerInstance.soundController.PlaySoundChoose();
                                charController.isChoosed = true;
                                charController.ActiveChoose();
                                lstObjects.Add(charController);
                            }
                        }
                    }
                }
                if (Input.GetMouseButtonUp(0))
                {
                    if (lstObjects.Count > 1)
                    {
                        StartCoroutine(IEMergePlayer());
                        GlobalInstance.Instance.gameManagerInstance.isCanDraw = false;
                        GlobalInstance.Instance.gameManagerInstance.drawLine.lstLinePoints.Clear();
                        Destroy(GlobalInstance.Instance.gameManagerInstance.drawLine.currentLine);
                    }
                    else
                    {
                        ResetAll();
                    }
                }
            }
        }
    }
    IEnumerator IEMergePlayer()
    {
        //For GamePlayFight
        if (lstObjects.Count <= GlobalInstance.Instance.gameManagerInstance.totalPlayer / 2)
            EventDispatcher.Instance.PostEvent(EventID.CheckMerge);
        var lastObject = lstObjects[lstObjects.Count - 1];
        for (int i = 0; i < lstObjects.Count; i++)
        {
            lstObjects[i].UnActiveChoose();
            //For GamePlayFight
            GlobalInstance.Instance.gameManagerInstance.lstCharacter.Remove(lstObjects[i]);
        }
        yield return new WaitForSeconds(0.2f);
        for (int i = 0; i < lstObjects.Count; i++)
        {
            lstObjects[i].transform.DOMove(lastObject.transform.position, 0.7f).SetEase(Ease.InBack).OnComplete(() =>
            {
                if (!flagMergeDone)
                {
                    flagMergeDone = true;
                    int index = 0;
                    for (int j = 0; j < lstObjects.Count; j++)
                    {

                        index += lstObjects[j].index * 2;
                        if (j == lstObjects.Count - 1)
                        {
                            lstObjects[j].SpawnCharacter(index);
                        }
                        lstObjects[j].gameObject.SetActive(false);
                    }
                    //GlobalInstance.Instance.gameManagerInstance.ToTheEndGame();
                    //GlobalInstance.Instance.gameManagerInstance.guideEnd.SetActive(true);
                    //For GamePlayFight
                    ResetAll();
                }
            });
        }
    }
    void ResetAll()
    {
        flagMergeDone = false;
        for (int i = 0; i < lstObjects.Count; i++)
        {
            lstObjects[i].UnActiveChoose();
            lstObjects[i].isChoosed = false;
        }
        lstObjects.Clear();
        //GlobalInstance.Instance.gameManagerInstance.isCanDraw = true;
    }
}
