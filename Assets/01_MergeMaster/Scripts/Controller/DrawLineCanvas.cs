using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DrawLineCanvas : MonoBehaviour
{
    //public GameObject Line;
    //GameObject CurrentLine;
    //LineRenderer linerenderer;
    //private List<Vector2> FingerPositions;
    //public Canvas Can;
    //private void Start()
    //{
    //    FingerPositions = new List<Vector2>();
    //}
    //void Update()
    //{
    //    if (Input.GetMouseButtonDown(0))
    //    {
    //        CreateLine();
    //    }

    //    if (Input.GetMouseButton(0))
    //    {
    //        Vector2 tempfingerpos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
    //        if (Vector2.Distance(tempfingerpos, FingerPositions[FingerPositions.Count - 1]) > 0.1f)
    //        {
    //            UpdateLine(tempfingerpos);
    //        }
    //    }
    //}

    //void CreateLine()
    //{
    //    CurrentLine = Instantiate(Line, Vector3.zero, Quaternion.identity);
    //    linerenderer = CurrentLine.GetComponent<LineRenderer>();
    //    FingerPositions.Clear();
    //    FingerPositions.Add(Camera.main.ScreenToWorldPoint(Input.mousePosition));
    //    FingerPositions.Add(Camera.main.ScreenToWorldPoint(Input.mousePosition));
    //    linerenderer.SetPosition(0, FingerPositions[0]);
    //    linerenderer.SetPosition(0, FingerPositions[1]);
    //    CurrentLine.transform.SetParent(Can.transform, false);
    //}

    //void UpdateLine(Vector2 NewFingerPos)
    //{
    //    FingerPositions.Add(NewFingerPos);
    //    linerenderer.positionCount++;
    //    linerenderer.SetPosition(linerenderer.positionCount - 1, NewFingerPos);
    //}





    /// <summary>
    /// Starting position of the created line
    /// </summary>
    Vector3 startPosition;

    /// <summary>
    /// GameObject of the created line
    /// </summary>
    GameObject currentLineObject;

    /// <summary>
    /// lineRenderer of the created line
    /// </summary>
    LineRenderer currentLineRenderer;

    /// <summary>
    /// Material of the drawn line.
    /// For my example I used a new Material with "UI/Default" shader
    /// </summary>
    public Material lineMaterial;

    /// <summary>
    /// thickness of the drawn line
    /// </summary>
    public float lineThickness;

    /// <summary>
    /// Canvas that you want to draw on
    /// </summary>
    public Canvas parentCanvas;

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            StartDrawingLine();
        }
        else if (Input.GetMouseButton(0))
        {
            PreviewLine();
        }
        else if (Input.GetMouseButtonUp(1))
        {
            EndDrawingLine();
        }
    }

    /// <summary>
    /// Returns the current mouseposition relative to the canvas.
    /// Modifies the z-value slightly so that stuff will be rendered in front of UI elements.
    /// </summary>
    /// <returns></returns>
    Vector3 GetMousePosition()
    {
        Vector2 movePos;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            parentCanvas.transform as RectTransform,
            Input.mousePosition, parentCanvas.worldCamera,
            out movePos);
        Vector3 positionToReturn = parentCanvas.transform.TransformPoint(movePos);
        positionToReturn.z = parentCanvas.transform.position.z;
        return positionToReturn;
    }

    /// <summary>
    /// Starts drawing the line
    /// Creates a new GameObject at the startPosition and adds a LineRenderer to it
    /// The LineRenderer also gets modified with material and thickness here
    /// </summary>
    void StartDrawingLine()
    {
        startPosition = GetMousePosition();
        currentLineObject = new GameObject();
        currentLineObject.transform.position = startPosition;
        currentLineRenderer = currentLineObject.AddComponent<LineRenderer>();
        currentLineRenderer.material = lineMaterial;
        currentLineRenderer.startWidth = lineThickness;
        currentLineRenderer.endWidth = lineThickness;
    }

    /// <summary>
    /// Updates the LineRenderer Positions
    /// </summary>
    void PreviewLine()
    {
        currentLineRenderer.SetPositions(new Vector3[] { startPosition, GetMousePosition() });
    }

    /// <summary>
    /// Cleans up the used variables as the LineRenderer will not be modified anymore
    /// </summary>
    void EndDrawingLine()
    {
        startPosition = Vector3.zero;
        currentLineObject = null;
        currentLineRenderer = null;
    }
}
