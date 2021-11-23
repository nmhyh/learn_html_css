// Cách Làm Library Chỉ Với ~30 dòng code hoạt động như React+Redux
// TODOS -> code thuần
// Library -> TODOS -> 180deg
// Nâng cao -> Cơ bản (nghĩ khác đi) -> Open

import { attach } from './store.js';
import App from './component/app.js';

attach(App, document.getElementById('root'));
