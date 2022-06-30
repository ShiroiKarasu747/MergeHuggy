using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LookAtCamera : MonoBehaviour
{
    private GameObject camera;
    void Start()
    {
        camera = GlobalInstance.Instance.gameManagerInstance.cameraMain.gameObject;
    }
    // Update is called once per frame
    void Update()
    {
        transform.LookAt(transform.position + camera.transform.forward);
    }
}
