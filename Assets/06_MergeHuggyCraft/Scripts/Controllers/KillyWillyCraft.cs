using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class KillyWillyCraft : EnemyController
{
    public GameObject prefBullet;
    public void Attacking()
    {
        if (isAlive)
        {
            var bullet = SimplePool.Spawn(prefBullet);
            bullet.transform.position = playerTarget.transform.position;
            GlobalInstance.Instance.gameManagerInstance.soundController.PlaySoundLightning();
        }
    }
}
