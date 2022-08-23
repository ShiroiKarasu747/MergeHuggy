using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DrawLineTutorial : DrawLine
{
    [SerializeField] private RectTransform drawPoint;
    [SerializeField] private GameObject drawManager;
    private bool isDrawing = false;

    // Update is called once per frame
    protected override void Update()
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isEndGame)
        {
            if (GlobalInstance.Instance.gameManagerInstance.isCanDraw && isDrawing)
            {
                timer -= Time.deltaTime;
                if (timer <= 0)
                {
                    lineColor.a = 255;
                    SetLineColor(lineColor);
                    lstLinePoints.Add(GetCurrentPosition());
                    currentLine.positionCount = lstLinePoints.Count;
                    currentLine.SetPositions(lstLinePoints.ToArray());
                    timer = timeDelay;
                }
            }
        }
        //if (Input.GetMouseButtonDown(0))
        //{
        //    StopDrawing();
        //    drawManager.SetActive(false);
        //}
    }

    private void StartDrawing()
    {
        lineColor.a = 0;
        lstLinePoints = new List<Vector3>();
        timer = timeDelay;
        currentLine = Instantiate(linePref, drawManager.transform).GetComponent<LineRenderer>();
        //Time.timeScale = 0;
        SetLineColor(lineColor);
        SetLineWidth(lineWidth);
        isDrawing = true;
        Update();
    }

    public void StopDrawing()
    {
        lstLinePoints.Clear();
        if (currentLine) Destroy(currentLine);
    }

    Vector3 GetCurrentPosition()
    {
        Ray ray = Camera.main.ScreenPointToRay(Camera.main.WorldToScreenPoint(drawPoint.position));
        RaycastHit hit;
        if (Physics.Raycast(ray, out hit, 1000))
        {
            if (hit.transform.CompareTag(NameTag.FakeGround))
            {
                return hit.point;
            }
        }
        return ray.origin + ray.direction * 10;
    }
}
