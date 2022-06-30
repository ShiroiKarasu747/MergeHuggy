using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalInstance : Singleton<GlobalInstance>
{
    public MergeHuggy1 gameManagerInstance = MergeHuggy1.Instance;
}
