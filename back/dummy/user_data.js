const user = [
    {
        userid: `dd`,
        userpw: `password`,
        username: `제의아해`,
        nickname: `charey`,
        address: `천호동`,
        avatarUrl: `url`,
        gender: `남자`,
        phone: `0101234123`,
        email: `ckstn10@gamil.com`,
        provider: `local`,
        introduce: `나는 바보입니다...`,
    },
]

for (let i = 0; i <= 50; i++) {
    const obj = {
        userid: `char${i}ey`,
        userpw: `password${i}`,
        username: `제${i}의아해`,
        nickname: `char${i}ey`,
        address: `천호${i}동`,
        avatarUrl: `url${i}`,
        gender: `남자`,
        phone: `0101234123${i}`,
        email: `ckstn${i}10@gamil.com`,
        provider: `local`,
        introduce: `나는 바보입니다...`,
    }

    user.push(obj)
}

module.exports = user
