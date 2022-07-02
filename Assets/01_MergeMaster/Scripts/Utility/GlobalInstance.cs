using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalInstance : Singleton<GlobalInstance>
{
    public MergeHuggyCraft1 gameManagerInstance = MergeHuggyCraft1.Instance;
}
