/**
 * The asterisk shown beside a required field's label.
 *
 * `aria-hidden` keeps it out of the accessible name — screen readers announce
 * the field's own `required` attribute instead, so the asterisk is purely a
 * visual cue and never read as "star".
 */
export default function RequiredMark() {
  return (
    <span className="text-danger ml-0.5" aria-hidden="true">
      *
    </span>
  );
}
