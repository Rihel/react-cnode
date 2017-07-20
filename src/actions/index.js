import {
    getData,
    postData
} from '../api';
export const SaveTopic = 'SaveTopic';
export const saveTopics = (data) => ({
    type: SaveTopic,
    data
});

export const getTopics = tab => {
    console.log(tab)
    return async dispatch => {
        const data = await getData('/topics', {
            tab
        });
        if (data.data.success) {
            await dispatch(saveTopics({
                topics:data.data.data
            }));
        }

    }
}