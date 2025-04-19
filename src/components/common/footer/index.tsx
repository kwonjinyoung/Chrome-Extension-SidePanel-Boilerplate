/**
 * 관련 기획서:
 * - /기획/UI컴포넌트_기획.md
 */
function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-200 text-center py-4">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} My Awesome App. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
