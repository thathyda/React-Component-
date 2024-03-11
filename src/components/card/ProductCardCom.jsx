export default function product() {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://i.pinimg.com/236x/90/d5/96/90d5968fe586052b03529a2285d7930e.jpg"
          alt="anime-pic"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <p>If you interest the Pic Anime in this page ?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
