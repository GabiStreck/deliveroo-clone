import SectionRow from '../components/SectionRow';
import { useSection } from '../hook/useSection';

export const SectionsHome = () => {
    const { sections } = useSection()
    return sections?.map(({ title, restaurants, short_description, _id }) => (
        <SectionRow
            key={_id}
            title={title}
            restaurants={restaurants}
            description={short_description}
        />
    ))
}
