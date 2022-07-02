using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HumanCraft : MainCharacter
{
    public BoxCollider colliderAttack;
    public Renderer hand;
    public Renderer head;
    public void Attacking()
    {
        if (isAlive)
        {
            GlobalInstance.Instance.gameManagerInstance.soundController.PlaySoundPunch();
            colliderAttack.enabled = true;
        }
    }
    public override void ApplyDamage()
    {
        _propBlock = new MaterialPropertyBlock();
        meshRenderer.GetPropertyBlock(_propBlock);
        _propBlock.SetColor("_Color", Color.red);
        //ChangeColor();
        meshRenderer.SetPropertyBlock(_propBlock);
        hand.SetPropertyBlock(_propBlock);
        head.SetPropertyBlock(_propBlock);
        StartCoroutine(HelperUtility.StartAction(() =>
        {
            _propBlock.SetColor("_Color", new Color32(217, 217, 217, 255));
            meshRenderer.SetPropertyBlock(_propBlock);
            hand.SetPropertyBlock(_propBlock);
            head.SetPropertyBlock(_propBlock);
        }, 0.3f));
    }
}
