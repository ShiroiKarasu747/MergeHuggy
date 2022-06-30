using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AttackUniversal : MonoBehaviour
{
    public LayerMask AttackPlayerCollision;
    private float radius = 2f;
    public float damage = 1f;
    public bool isAttackPlayer, isAttackEnemy;
    private void Update()
    {
        DetectCollision();
    }
    void DetectCollision()
    {
        Collider[] hit = Physics.OverlapSphere(transform.position, radius, AttackPlayerCollision);

        if (hit.Length > 0)
        {
            if (isAttackEnemy)
            {
                Vector3 hitPos = hit[0].transform.position;
                hitPos.y += 3;
                if (hit[0].transform.forward.x > 0)
                {
                    hitPos.x += 0.3f;
                }
                else if (hit[0].transform.forward.x < 0)
                {
                    hitPos.x -= 0.3f;
                }
                //Instantiate(hitFX, hitPos, Quaternion.identity);
                hit[0].GetComponent<CharacterController>().ApplyDamage();

            }
        }
    }
}
