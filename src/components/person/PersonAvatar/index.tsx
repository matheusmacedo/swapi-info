import type { Person } from "@/types/Person";

// Searched for avatar placeholder and found this one
// https://avatar-placeholder.iran.liara.run/document

type PersonAvatarProps = Pick<Person, "name" | "gender">;

function PersonAvatar({
  person,
  size = 300,
}: {
  person: PersonAvatarProps;
  size?: number;
}) {
  const avatarId =
    (Math.abs(
      person.name.split("").reduce((hash, char) => {
        return hash + char.charCodeAt(0);
      }, 0)
    ) %
      100) +
    1;

  const avatarUrl = `https://avatar.iran.liara.run/public/${
    person.gender === "male" ? "boy" : "girl"
  }?username=${avatarId}`;

  return (
    <div className={`w-full h-[${size}px]`}>
      <img
        loading="lazy"
        src={avatarUrl}
        alt={`Avatar for ${person.name}`}
        className={`w-[${size}px] h-[${size}px] rounded-full object-cover`}
      />
    </div>
  );
}

export default PersonAvatar;
