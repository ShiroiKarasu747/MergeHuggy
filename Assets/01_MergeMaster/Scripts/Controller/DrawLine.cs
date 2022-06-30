using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DrawLine : MonoBehaviour
{
    [SerializeField] private float timeDelay;
    [SerializeField] private GameObject linePref;
    [HideInInspector] public List<Vector3> lstLinePoints;
    [HideInInspector] public LineRenderer currentLine;
    [Space(30f)]
    public Color lineColor;
    public float lineWidth;
    float timer;
    private void Start()
    {
        lstLinePoints = new List<Vector3>();
        timer = timeDelay;
    }
    private void Update()
    {
        if (!GlobalInstance.Instance.gameManagerInstance.isEndGame)
        {
            if (GlobalInstance.Instance.gameManagerInstance.isCanDraw)
            {
                if (Input.GetMouseButtonDown(0))
                {
                    currentLine = Instantiate(linePref, this.transform).GetComponent<LineRenderer>();
                    SetLineColor(lineColor);
                    SetLineWidth(lineWidth);
                    GlobalInstance.Instance.gameManagerInstance.UnActiveGuide();
                }
                if (Input.GetMouseButton(0))
                {
                    timer -= Time.deltaTime;
                    if (timer <= 0)
                    {
                        lstLinePoints.Add(GetMousePosition());
                        currentLine.positionCount = lstLinePoints.Count;
                        currentLine.SetPositions(lstLinePoints.ToArray());
                        timer = timeDelay;
                    }
                }
                if (Input.GetMouseButtonUp(0))
                {
                    lstLinePoints.Clear();
                    Destroy(currentLine);
                }
            }
        }
        else
        {
            if (Input.GetMouseButtonDown(0))
            {
                GlobalInstance.Instance.gameManagerInstance.InstallFullGame();
            }
        }
    }
    Vector3 GetMousePosition()
    {
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
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
    public void SetLineColor(Color color)
    {
        currentLine.startColor = color;
        currentLine.endColor = color;
    }
    public void SetLineWidth(float width)
    {
        currentLine.startWidth = width;
        currentLine.endWidth = width;
    }
}
