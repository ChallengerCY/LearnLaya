export default class TestLabel extends Laya.Script {
    constructor() {
        super();
    }

    private lable:Laya.Label;

    onAwake()
    {
        this.lable=this.owner as Laya.Label;
        this.lable.text="11111111111111";
    }


    /**
     * 创建一个带有默认值的Lable
     * @param content Lable要显示的内容
     */
    private CreateNewLabeWithDefaultContent(content:string):Laya.Label
    {
        return new Laya.Label(content);
    }

    /**
     * 创建一个Lable
     */
    private CreatNewLable():Laya.Label
    {
        return new Laya.Label();
    }

    /**
     * 设置Lable是否是自动计算宽度和高度
     * 不推荐设置为true，会对性能造成影响
     * @param lable 目标lable
     * @param state AutoSize的状态
     */
    private SetLableAutoSize(lable:Laya.Label,state:boolean)
    {
        lable.autoSize=state;
    }

    /**
     * 设置Lable鼠标检测的优先级,false为优先检测子对象
     * @param lable 目标lable
     * @param state hitTestPrior的状态
     */
    private SethitTestPrior(lable:Laya.Label,state:boolean)
    {
        lable.hitTestPrior=state;
    }

    /**
     * 用于修正点击区域的属性。
     * 设置为false时,以宽高为准。
     * 设置为true时,以显示区域内为点击范围。
     * @param lable 
     * @param state 
     */
    private SetMouseThrough(lable:Laya.Label,state:boolean)
    {
        lable.mouseThrough=state;
    }
    
    /**
     * 获取当前Lable自身是否激活
     * @param lable 目标Lable
     */
    private GetLableActive(lable:Laya.Label):boolean
    {
        return lable.active
    }

    /**
     * 设置当前Lable自身是否激活
     * @param lable 目标Lable
     * @param state 显示状态
     */
    private SetLableActive(lable:Laya.Label,state:boolean)
    {
        lable.active=state
    }

    /**
     * 获取Lable在场景中是否激活
     * @param lable 目标lable
     */
    private GetActiveInHierarchy(lable:Laya.Label):boolean
    {
        return lable.activeInHierarchy;
    }

    /****************************************************************不明确的地方*************************************************************************/
    
    private StaticDrawtocanvCtx()
    {
        Laya.Label.drawtocanvCtx;
    }

 
}

