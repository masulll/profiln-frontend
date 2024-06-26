import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  return (
    <main className="d-flex justify-content-center my-3">
      <div style={{ margin: "0em 1.3em" }}>
        <p>Ini halaman profile{router.query.id}</p>
      </div>
    </main>
  );
};

export default Index;
