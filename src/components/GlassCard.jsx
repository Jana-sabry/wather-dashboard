function GlassCard({children , className = ""}){
    return(
        <div className={`rounded-3xl border border-white/25 bg-white/15 backdrop-blur-md ${className}`}>
            {children}
        </div>
    )
}
export default GlassCard;