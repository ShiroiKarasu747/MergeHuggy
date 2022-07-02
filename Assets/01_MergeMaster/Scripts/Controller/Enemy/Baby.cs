using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Baby : EnemyController
{
    public GameObject prefBullet;
    public Transform pointShoot;
    public void SpawnerBullet()
    {
        if (isAlive)
        {
            var bullet = Instantiate(prefBullet);
            bullet.transform.position = pointShoot.position;
            //bullet.transform.rotation = pointShoot.rotation;
            GlobalInstance.Instance.gameManagerInstance.soundController.PlaySoundPunch();
            bullet.GetComponent<Rigidbody>().AddForce(200 * pointShoot.transform.forward);
        }
    }
}
