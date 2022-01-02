import { Link, Outlet } from 'remix';

export default function () {
  return (
    <div>
      <section>
        <h1>The Syntax Podcast</h1>
        <aside>
          <nav>
            <ul>
              <Link to="/syntax/show-1">Episode 1</Link>
            </ul>
          </nav>
        </aside>
      </section>
      <Outlet />
    </div>
  );
}
