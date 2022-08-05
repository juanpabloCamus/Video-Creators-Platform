export const config = () => ({
    jwtSecret: process.env.JWT_SECRET,
    database: {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'sql123',
        database: 'video_platform',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true,
    },
});