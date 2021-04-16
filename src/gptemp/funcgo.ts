import { StringUtils } from "../utils/StringUtIls";

export function HandleTemplate(service: string, fun: string, req: string, doc: string) {
    return `
//${doc}
func ${fun}(c *gin.Context) {
	// 获取数据
	data, err := c.GetRawData()
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
		return
	}
	// 数据填充结构
	req := pb.${req}{}
	if err = json.Unmarshal(data, &req); err != nil {
		c.String(http.StatusOK, err.Error())
		return
	}
	log.Println("AddCategory", req.Desc, req.Name, req.ParentId)
	// 调用RPC服务
	results, err := client.${service}Client.${fun}(context.Background(), &req)
	if err != nil {
		c.String(http.StatusOK, err.Error())
		return
	}
	log.Println(results)
	// 返回结果
	c.JSON(http.StatusOK, results)
}
`;
}

export function RouterTemplate(fun: string, doc: string) {
    return `Router.POST("/${StringUtils.HumpLine(fun)}", handle.${fun})//${doc}`;
}
