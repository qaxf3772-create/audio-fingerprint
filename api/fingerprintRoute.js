// نقطة اتصال الـ API لربط الواجهة بالخدمات
export default function handler(req, res) {
    // جلب المفتاح من الطلب للتحقق
    const { authKey } = req.body || {};
    
    // التحقق من المفتاح السري الخاص بك
    const isAdmin = authKey === 'y99r885139rrys';
    
    res.status(200).json({
        success: true,
        access: isAdmin ? "Admin Mode Activated" : "Standard User",
        message: "تم الاتصال بنجاح بنظام بصمة الصوت"
    });
}
