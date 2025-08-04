import type { Person } from "@/types/Person";

// Searched for avatar placeholder and found this one
// https://avatar-placeholder.iran.liara.run/document

type PersonAvatarProps = Pick<Person, "name" | "gender">;

function PersonAvatar({ person }: { person: PersonAvatarProps }) {
  const avatarId =
    (Math.abs(
      person.name.split("").reduce((hash, char) => {
        return hash + char.charCodeAt(0);
      }, 0)
    ) %
      100) +
    1;

  const avatarUrl = `https://avatar.iran.liara.run/public/${avatarId}`;

  return (
    <img
      src={avatarUrl}
      alt={`Avatar for ${person.name}`}
      className="w-32 h-32 rounded-full object-cover"
    />
  );
}

export default PersonAvatar;
