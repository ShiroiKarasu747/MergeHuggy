using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HuggyCraft : MainCharacter
{
    public BoxCollider colliderAttack;
    public void Attacking()
    {
        if (isAlive)
        {
            GlobalInstance.Instance.gameManagerInstance.soundController.PlaySoundPunch();
            colliderAttack.enabled = true;
        }
    }
}
