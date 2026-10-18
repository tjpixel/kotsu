# Kotsu en iPhone · notas para la app nativa

La web de pruebas fija el diseño, los flujos y el formato de datos. En SwiftUI cada pieza tiene su equivalente:

| Web de pruebas | App de iOS |
|---|---|
| `core.js` (rachas, constancia, metas) | Modelo en Swift, misma lógica 1:1 |
| Datos en localStorage, formato `kotsu_v1` | SwiftData en el móvil + sincronización (Supabase o CloudKit) con el mismo JSON |
| Marcar un hábito | También desde el **widget interactivo** y desde la pantalla de bloqueo |
| Temporizador de hábitos con tiempo | **Actividad en vivo**: hábito y tiempo en la pantalla de bloqueo y la Dynamic Island |
| Hora de cada hábito | **Notificación** a esa hora, solo si aún no está hecho |
| Ánimo del día | Notificación a las 21:00 con los cinco botones, sin abrir la app |
| Anillo de hoy y cinturón | **Widget** de pantalla de inicio y de bloqueo |
| «Marcar meditar» | **App Intent**: «Oye Siri, he meditado» |
| Plus simulado | StoreKit 2: anual con 7 días gratis y mensual |

## Pendiente de decidir
- Confirmar que el nombre «Kotsu» está libre (App Store y registro de marcas) antes de publicar.
- Cuentas: una sola para la familia (Tsuyo, Neiro y Kotsu) o separadas.
- Si Tsuyo y Neiro marcan solos en Kotsu los hábitos de entrenar y cantar al terminar una sesión.
