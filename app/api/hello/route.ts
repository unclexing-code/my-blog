export async function GET() {
  return Response.json({
    code: 200,
    msg: "接口正常",
    data: "Next.js 前后端同框部署成功"
  });
}