import mysql2 from "mysql2"
import { confi } from "../../confi.js"
export function GetHaveListFriendsByIdUserDB(id: string) {
    return new Promise((res, error) => {
        let con = mysql2.createConnection(confi)
        con.connect((err) => {
            if (err) {
                error(err)
            }
            let query = "SELECT u.id,u.nameUser,u.avatar,u.birthday,u.sex FROM havelistfriends h,user u WHERE h.idUser=? AND h.idFriends=u.id"
            con.query(query, id, (err, rt, fiels) => {
                if (err) {
                    error(err)
                }
                res(rt);
                con.end()
            })
        })
    })
}
export function SearchFirendsByIdDB(id: string) {
    return new Promise((res, error) => {
        let con = mysql2.createConnection(confi)
        con.connect((err) => {
            if (err) {
                error(err)
            }
            let query = "SELECT * FROM `user` WHERE user.id=? "
            con.query(query, id, (err, rt, fiels) => {
                if (err) {
                    error(err)
                }
                res(rt);
                con.end()
            })
        })
    })
}
export function SearchFirendsByNameDB(iduser: string, name: string) {
    return new Promise((res, error) => {
        let con = mysql2.createConnection(confi)
        con.connect((err) => {
            if (err) {
                error(err)
            }
            let query = `SELECT * FROM user u, havelistfriends h WHERE h.idUser = ? and h.idFriends = u.id AND u.nameUser LIKE ?`
            con.query(query, [iduser, `%${name}%`, iduser], (err, rt, fiels) => {
                if (err) {
                    error(err)
                }
                res(rt);
                con.end()
            })
        })
    })
}
export function IsFriendInListDB(idUser: string, idFriend: string) {
    return new Promise((res, error) => {
        let con = mysql2.createConnection(confi)
        con.connect((err) => {
            if (err) {
                error(err)
            }
            let query = `SELECT * FROM havelistfriends where idUser=? and idFriends=?`
            con.query(query, [idUser, idFriend], (err, rt, fiels) => {
                if (err) {
                    error(err)
                }
                res(rt);
                con.end()
            })
        })
    })
}
export function insertListFriendsDB(idUser: string, idFriend: string) {
    return new Promise((res, error) => {
        let con = mysql2.createConnection(confi)
        con.connect((err) => {
            if (err) {
                error(err)
            }
            let query = `INSERT INTO havelistfriends(idUser, idFriends) VALUES (?,?)`
            con.query(query, [idUser, idFriend], (err, rt, fiels) => {
                if (err) {
                    error(err)
                }
                res(rt);
                con.end()
            })
        })
    })
}
export function CancelFriendsDB(idUser: string, idFriend: string) {
    return new Promise((res, error) => {
        let con = mysql2.createConnection(confi)
        con.connect((err) => {
            if (err) {
                error(err)
            }
            let query = `DELETE FROM havelistfriends WHERE idUser = ? AND idFriends = ?`
            con.query(query, [idUser, idFriend], (err, rt, fiels) => {
                if (err) {
                    error(err)
                }
                res(rt);
                con.end()
            })
        })
    })
}
