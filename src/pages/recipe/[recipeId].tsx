import {useRouter} from 'next/router';

const RecipeDetailPage = () => {

    const router = useRouter();
    //print id of the recipe
    return <div>Recipe id is: {router.query.recipeId}</div>;
}

export default RecipeDetailPage;