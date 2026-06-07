import { MovieDetailPage } from "../../_pages/movie-detail-page";

type MovieDetailRouteProps = {
  params: Promise<{
    movieId: string;
  }>;
};

export default async function Page({ params }: MovieDetailRouteProps) {
  const { movieId } = await params;

  return <MovieDetailPage movieId={movieId} />;
}
