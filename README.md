# Подготовка проекта
Установите Ionic CLI, если еще не установлен:

bash

npm install -g @ionic/cli

Создайте новый проект или добавьте Ionic в существующий:

bash
# Для нового проекта
ionic start myMobileApp --type=react
cd myMobileApp

# Для существующего проекта
npm install @ionic/react @ionic/react-router @ionic/core

# Дополнительные настройки
Установите необходимые зависимости:

bash
npm install axios @ionic/core
Для обработки навигации установите react-router:

bash
npm install react-router react-router-dom @types/react-router @types/react-router-dom
Для запуска приложения в режиме разработки:

bash
ionic serve
Для сборки под мобильные платформы:

bash
# Добавьте платформу (Android или iOS)
ionic capacitor add android
# или
ionic capacitor add ios

# Соберите проект
ionic build

# Скопируйте сборку в нативную среду
ionic capacitor copy

# Откройте проект в Android Studio или Xcode
ionic capacitor open android
# или
ionic capacitor open ios
