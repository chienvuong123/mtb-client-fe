export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Tìm sản phẩm dựa trên params.id
  return <div>Chi tiết sản phẩm ID: {params.id}</div>;
}
