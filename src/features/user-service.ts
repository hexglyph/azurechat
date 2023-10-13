import { CosmosDBContainer } from './common/cosmos'
import { SqlQuerySpec } from "@azure/cosmos"

export async function updateUserInstructions(userId: any, instructions: any) {
    const cosmosDBInstance = await CosmosDBContainer.getInstance();
    const userContainer = await cosmosDBInstance.getContainer('user')

    const querySpec: SqlQuerySpec = {
        query: "SELECT * FROM c r WHERE r.id = @userId",
        parameters: [
            {
                name: "@userId",
                value: userId,
            },
        ],
    };

    const { resources: users } = await userContainer.items
        .query(querySpec)
        .fetchAll();

    let user;
    if (users.length === 0) {
        user = {
            id: userId,
            instructions: instructions,
        };
    } else {
        user = users[0];
        user.instructions = instructions;
    }

    user.instructions = instructions;

    await userContainer.items.upsert(user);
}


export async function getUserInstructions(userId: any) {
    const cosmosDBInstance = await CosmosDBContainer.getInstance();
    const userContainer = await cosmosDBInstance.getContainer('user')

    const { resources: users } = await userContainer.items
        .query({
        query: "SELECT * FROM c r WHERE r.id = @userId",
        parameters: [{ name: "@userId", value: userId }],
        })
        .fetchAll();

    if (users.length === 0) {
        throw new Error('User not found');
    }

    const user = users[0];
    return user.instructions;
}