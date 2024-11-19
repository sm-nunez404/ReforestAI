export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2024 ReforestAI. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Términos
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
