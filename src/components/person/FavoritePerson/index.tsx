import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

function FavoritePerson({ name }: { name: string }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoritePeople, setFavoritePeople] = useLocalStorage<string[]>(
    "favoritePeople",
    []
  );

  useEffect(() => {
    setIsFavorite(favoritePeople?.includes(name) || false);
  }, [favoritePeople, name]);

  const handleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      setFavoritePeople(favoritePeople.filter((person) => person !== name));
    } else {
      setIsFavorite(true);
      setFavoritePeople([...favoritePeople, name]);
    }
  };

  return (
    <button
      className="flex items-center gap-2 text-text my-4"
      type="button"
      onClick={handleFavorite}
    >
      <HeartIcon
        className="w-6 h-6"
        fill={isFavorite ? "red" : "none"}
        stroke={isFavorite ? "red" : "currentColor"}
      />{" "}
      {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </button>
  );
}

export default FavoritePerson;
