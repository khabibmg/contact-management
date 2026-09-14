export default function Button({ children, type = 'button', variant = 'primary', size = 'md', icon, isLoading = false, className = '', disabled, ...rest }) {
  const baseStyle =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg'
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 hover:-translate-y-0.5',
    gradient: 'bg-gradient text-white hover:opacity-90 transform hover:-translate-y-0.5',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-gray-200 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 hover:-translate-y-0.5',
    outline: 'border border-gray-600 hover:bg-gray-700 text-gray-300 focus:ring-gray-500',
    gray: 'bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 flex items-center shadow-md'
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md1: 'px-5 py-3 font-medium',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-4 py-3 text-base'
  }
  return (
    <button type={type} disabled={disabled || isLoading} className={`${baseStyle} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`} {...rest}>
      {isLoading ? <i className="fas fa-spinner fa-spin mr-2" /> : icon ? <i className={`${icon} mr-2`} /> : null}
      {children}
    </button>
  )
}
