using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BossHuggy : EnemyController
{
    //public GameObject effectSlash;
    //public GameObject spikeAttack;
    public BoxCollider colliderAttack;
    public void AttackDamage()
    {
        if (isAlive)
        {
            //effectSlash.SetActive(true);
            //spikeAttack.SetActive(true);
            GlobalInstance.Instance.gameManagerInstance.soundController.PlaySoundPunch();
            //GlobalInstance.Instance.gameManagerInstance.soundController.PlaySoundPunch();
            colliderAttack.enabled = true;
            //spikeAttack.GetComponent<ParticleSystem>().Play();
            //effectSlash.GetComponent<ParticleSystem>().Play();
            StartCoroutine(HelperUtility.StartAction(() =>
            {
                //effectSlash.SetActive(false);
                //spikeAttack.SetActive(false);
                colliderAttack.enabled = false;
            }, 1));
        }
    }
}
