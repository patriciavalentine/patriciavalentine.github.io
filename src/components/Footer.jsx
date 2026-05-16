import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          {/* <span>{profile.role} • {profile.professionalTitle}</span> */}
          <span>{profile.role}</span>
        </div>
        <p>@2026.</p>
      </div>
    </footer>
  );
}
