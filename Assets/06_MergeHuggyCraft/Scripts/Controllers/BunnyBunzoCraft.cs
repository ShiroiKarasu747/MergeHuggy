using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BunnyBunzoCraft : EnemyController
{
    public GameObject prefBullet;
    public void Attacking()
    {
        if (isAlive)
        {
            var bullet = SimplePool.Spawn(prefBullet);
            bullet.transform.position = playerTarget.transform.position;
            //bullet.transform.rotation = Quaternion.Euler(90, 0, 0);
            GlobalInstance.Instance.gameManagerInstance.soundController.PlaySoundLightning();
        }
    }
}
