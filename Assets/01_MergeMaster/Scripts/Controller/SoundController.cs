using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SoundController : Singleton<SoundController>
{
    public AudioSource audioSourceFX;
    public AudioSource audioSourceBG;
    public AudioClip clipChoose, clipMerge, clipLose, clipWin, clipPunch, clipTRex, clipFall, clipSlash;
    public void PlaySoundChoose()
    {
        PlaySoundFX(clipChoose);
    }
    public void PlaySoundMerge()
    {
        PlaySoundFX(clipMerge);
    }

    public void PlaySoundWin()
    {
        PlaySoundFX(clipWin);
    }
    public void PlaySoundLose()
    {
        PlaySoundFX(clipLose);
    }
    public void PlaySoundPunch()
    {
        PlaySoundFX(clipPunch);
    }

    public void PlaySoundSlash()
    {
        PlaySoundFX(clipSlash);
    }

    public void PlaySoundTRex()
    {
        PlaySoundFX(clipTRex);
    }
    public void PlaySoundFall()
    {
        PlaySoundFX(clipFall);
    }



    void PlaySoundFX(AudioClip audioClip)
    {
        audioSourceFX.PlayOneShot(audioClip);
    }
    public void PlaySoundBG()
    {
        audioSourceBG.Play();
    }
    public void StopSound()
    {
        audioSourceBG.Stop();
        audioSourceFX.Stop();
    }
}
