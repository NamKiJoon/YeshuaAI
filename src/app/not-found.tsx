export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">페이지를 찾을 수 없습니다.</h1>
      <p className="text-muted-foreground">
        주소가 잘못되었거나 존재하지 않는 페이지입니다.
      </p>
    </div>
  );
}
