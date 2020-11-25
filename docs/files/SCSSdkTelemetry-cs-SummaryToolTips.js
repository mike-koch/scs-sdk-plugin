NDSummary.OnToolTipsLoaded("File:SCSSdkTelemetry.cs",{569:"<div class=\"NDToolTip TDelegate LCSharp\"><div id=\"NDPrototype569\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">public delegate void</span> TelemetryData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">SCSTelemetry&nbsp;</td><td class=\"PName last\">data,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">newTimestamp</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",570:"<div class=\"NDToolTip TClass LCSharp\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype570\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">public</span></div><div class=\"CPName\"><span class=\"Qualifier\">SCSSdkClient.</span>&#8203;SCSSdkTelemetry</div></div></div><div class=\"TTSummary\">Handle the SCSSdkTelemetry.&nbsp; Currently IDisposable. Was implemented because of an error</div></div>",572:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype572\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private const string</span> DefaultSharedMemoryMap</div></div>",573:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype573\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private const int</span> DefaultUpdateInterval</div></div>",574:"<div class=\"NDToolTip TConstant LCSharp\"><div id=\"NDPrototype574\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private const int</span> DefaultPausedUpdateInterval</div></div>",576:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype576\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private int</span> updateInterval</div></div>",577:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype577\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private int</span> pausedUpdateInterval</div></div>",578:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype578\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> Timer _updateTimer</div></div>",579:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype579\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private uint</span> lastTime</div></div>",581:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype581\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public void</span> Dispose()</div></div>",582:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype582\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public void</span> Dispose()</div></div>",584:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype584\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private</span> SharedMemory SharedMemory</div></div>",585:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype585\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> wasFinishingJob</div></div>",586:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype586\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> wasOnJob</div></div>",587:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype587\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> wasConnected</div></div>",588:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype588\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> cancelled</div></div>",589:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype589\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> delivered</div></div>",590:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype590\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> fined</div></div>",591:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype591\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> tollgate</div></div>",592:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype592\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> ferry</div></div>",593:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype593\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> train</div></div>",594:"<div class=\"NDToolTip TVariable LCSharp\"><div id=\"NDPrototype594\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">private bool</span> paused</div></div>",596:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype596\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public string</span> Map { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div>",597:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype597\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public int</span> UpdateInterval { <span class=\"SHKeyword\">get</span> }</div></div>",598:"<div class=\"NDToolTip TProperty LCSharp\"><div id=\"NDPrototype598\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public</span> Exception Error { <span class=\"SHKeyword\">get</span>; <span class=\"SHKeyword\">private set</span> }</div></div>",600:"<div class=\"NDToolTip TEvent LCSharp\"><div id=\"NDPrototype600\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public event</span> TelemetryData Data</div></div>",601:"<div class=\"NDToolTip TEvent LCSharp\"><div id=\"NDPrototype601\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public event</span> EventHandler JobStarted</div></div>",602:"<div class=\"NDToolTip TEvent LCSharp\"><div id=\"NDPrototype602\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public event</span> EventHandler JobFinished</div></div>",603:"<div class=\"NDToolTip TEvent LCSharp\"><div id=\"NDPrototype603\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public event</span> EventHandler JobCancelled</div></div>",604:"<div class=\"NDToolTip TEvent LCSharp\"><div id=\"NDPrototype604\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public event</span> EventHandler JobDelivered</div></div>",605:"<div class=\"NDToolTip TEvent LCSharp\"><div id=\"NDPrototype605\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public event</span> EventHandler Fined</div></div>",606:"<div class=\"NDToolTip TEvent LCSharp\"><div id=\"NDPrototype606\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public event</span> EventHandler Tollgate</div></div>",607:"<div class=\"NDToolTip TEvent LCSharp\"><div id=\"NDPrototype607\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public event</span> EventHandler Ferry</div></div>",608:"<div class=\"NDToolTip TEvent LCSharp\"><div id=\"NDPrototype608\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public event</span> EventHandler Train</div></div>",610:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype610\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public void</span> pause()</div></div>",611:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype611\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">public void</span> resume()</div></div>",612:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype612\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> Setup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">map,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">interval</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Set up SCS telemetry provider.&nbsp; Connects to shared memory map, sets up timebase.</div></div>",613:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype613\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private void</span> _updateTimer_Elapsed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">sender</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>",614:"<div class=\"NDToolTip TFunction LCSharp\"><div id=\"NDPrototype614\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">private static void</span> CurrentDomain_UnhandledException(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">object</span>&nbsp;</td><td class=\"PName last\">sender,</td></tr><tr><td class=\"PType first\">UnhandledExceptionEventArgs&nbsp;</td><td class=\"PName last\">e</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div>"});